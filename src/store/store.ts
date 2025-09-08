import { create } from 'zustand';

interface messege 
{
  text: string,
  Send:(text:string) => void,
  Display:() => void,
}
export const messegeSend = create<messege>((set,get) => ({

  text:"text",
  Send:(Usertext:string) => {set({text:Usertext})},
  Display:() => (alert(get().text))


}))

export default messegeSend