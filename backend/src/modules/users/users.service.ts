import * as dayjs from 'dayjs';
import aqp from 'api-query-params';
import { v4 as uuidv4 } from 'uuid';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { MailerService } from '@nestjs-modules/mailer';
import { BadRequestException, Injectable } from '@nestjs/common';

import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { hashPassword } from '@/utils/helper';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
    private readonly mailerService: MailerService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { name, email, phone, password, address, image } = createUserDto;

    // check if email exists then throw error
    const isExists = await this.userModel.exists({ email });
    if (isExists) {
      throw new BadRequestException(`Email ${email} already exists`);
    }

    // hash password
    const hashedPassword = await hashPassword(password);

    const user = await this.userModel.create({
      name,
      email,
      phone,
      password: hashedPassword,
      address,
      image,
      isActive: false,
      codeId: uuidv4(),
      codeExpired: dayjs().add(5, 'minutes'),
    });

    return {
      _id: user._id,
      codeId: user.codeId,
    };
  }

  async findAll(query) {
    const page = +query.page || 1;
    const pageSize = +query.pageSize || 10;

    const { filter, sort } = aqp(query);
    if (filter.page) delete filter.page;
    if (filter.pageSize) delete filter.pageSize;

    const totalItems = (await this.userModel.find(filter)).length;
    const totalPage = Math.ceil(totalItems / pageSize);

    const results = await this.userModel
      .find(filter)
      .sort(sort as any)
      .skip((page - 1) * pageSize)
      .limit(pageSize)
      .select('-password');

    return {
      data: results,
      pagination: {
        page,
        pageSize,
        totalItems,
        totalPage,
      },
    };
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findOneByEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  async update(updateUserDto: UpdateUserDto) {
    return await this.userModel.updateOne(
      { _id: updateUserDto._id },
      { ...updateUserDto },
    );
  }

  async remove(id: string) {
    // Check mongodb id
    if (mongoose.isValidObjectId(id)) {
      // Remove user
      return await this.userModel.deleteOne({ _id: id });
    } else {
      throw new BadRequestException(`Id ${id} invalid format`);
    }
  }

  async handleRegister(user: CreateUserDto) {
    const { _id, codeId } = await this.create(user);

    //send email
    this.mailerService.sendMail({
      to: user.email,
      subject: 'Activate your account at Taka',
      template: 'register',
      context: {
        name: user?.name ?? user.email,
        activationCode: codeId,
      },
    });

    return {
      _id,
    };
  }
}
