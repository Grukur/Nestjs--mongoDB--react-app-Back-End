import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://grukur:grukur@cluster0.4u4ewdk.mongodb.net/grukur01?retryWrites=true&w=majority'),
    TasksModule],
})
export class AppModule {}
 