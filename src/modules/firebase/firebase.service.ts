import { Injectable } from '@nestjs/common';
import {DataSnapshot, get, push, ref, set} from 'firebase/database'
import { firebaseDataBase } from 'src/firebase.config';

@Injectable()
export class FirebaseService {
  async createData(data: any): Promise<void>{
    const dataRef = ref(firebaseDataBase, 'Data')
    const newElementRef = push(dataRef, {dataRef: data})
    await set(newElementRef, data)
  }
  async getData(): Promise<any>{
    const dataRef = ref(firebaseDataBase, 'Data')
    const snapShot: DataSnapshot = await get(dataRef)
    return snapShot.val()
  }
}
