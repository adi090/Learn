// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { set } from "react-hook-form";
// const Login = () => {
//   const [loginInput,setLoginInput]=useState({email:"",password:""});
//   const [signupInput,setSignupInput]=useState({name:"",email:"",password:""});

//   const changeInputHandler=(e,type)=>{
//     const{name,value}=e.target;
//   if(type ==="signup"){
//     setSignupInput({...signupInput,[name]:value})
//   }
//   else  {
//     setLoginInput({...loginInput,[name]:value})
//   }
//   }
//   return (
//     <div className="flex items-center w-full justify-center">
//       <Tabs defaultValue="account" className="w-[400px]">
//         <TabsList className="grid w-full grid-cols-2">
//           <TabsTrigger value="signup">Signup</TabsTrigger>
//           <TabsTrigger value="login">Login</TabsTrigger>
//         </TabsList>
//         <TabsContent value="signup">
//           <Card>
//             <CardHeader>
//               <CardTitle>Signup</CardTitle>
//               <CardDescription>
//                 Create a new acccount and click signup when you're done.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-2">
//               <div className="space-y-1">
//                 <Label htmlFor="name">Name</Label>
//                 <Input
//                   type="text"
//                   id="name"
//                   placeholder="Eg.Rohan"
//                   required="true"
//                 />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="username">Email</Label>
//                 <Input
//                   type="email"
//                   id="name"
//                   placeholder="Eg.rohan@gmail.com"
//                   required="true"
//                 />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="username">Password</Label>
//                 <Input
//                   type="password"
//                   id="name"
//                   placeholder="Eg.abc@123"
//                   required="true"
//                 />
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button>Signup</Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>
//         <TabsContent value="login">
//           <Card>
//             <CardHeader>
//               <CardTitle>Login</CardTitle>
//               <CardDescription>
//                 Login your password here.After signup, you'll be logged in.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-2">
//               <div className="space-y-1">
//                 <Label htmlFor="current">Email</Label>
//                 <Input
//                   type="email"
//                   id="name"
//                   placeholder="Eg.rohan@gmail.com"
//                   required="true"
//                 />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="new">Password</Label>
//                 <Input type="password" placeholder="" required="true" />
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button>Login</Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   );
// };

// export default Login;
