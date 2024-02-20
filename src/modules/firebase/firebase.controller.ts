import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FirebaseService } from './firebase.service';


@Controller('firebase')
export class FirebaseController {
  constructor(private readonly service: FirebaseService) {}

  @Post('/createData')
  async createData(@Body() data: any): Promise<void>{
    await this.service.createData(data)
  }
  @Get('/getData')
  async getData(): Promise<void>{
    return await this.service.getData()
  }
}
