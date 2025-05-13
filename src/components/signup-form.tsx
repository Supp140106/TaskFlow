import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React, { useState } from "react";


export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [display, setdisplay] = useState(true);
  const [formdata, setformdata] = useState({
    username: "",
    company: "",
    email: "",
    password: "",
    repassword: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setformdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleformsubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formdata.password === formdata.repassword) {
      setdisplay((prev) => !prev);
      return;
    }
    alert("Password is not Matching")
  };

  return (
    <>
      {display && (
        <form
          onSubmit={handleformsubmit}
          className={cn("flex flex-col gap-6", className)}
          {...props}
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Signup as Manager</h1>
            <p className="text-muted-foreground text-sm text-balance">
              Enter your Details
            </p>
          </div>
          <div className="grid gap-6" id="signupbox">
            <div className="grid gap-3">
              <Label htmlFor="username">Name</Label>
              <Input
                id="username"
                type="text"
                placeholder="ex: John Doe"
                name="username"
                value={formdata.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                type="text"
                name="company"
                placeholder="ex: Alphabet"
                value={formdata.company}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="ex: m@example.com"
                value={formdata.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                name="password"
                type="password"
                value={formdata.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="grid gap-3">
              <div className="flex items-center">
                <Label htmlFor="repassword">Re-enter Password</Label>
              </div>
              <Input
                name="repassword"
                id="repassword"
                type="password"
                value={formdata.repassword}
                onChange={handleInputChange}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Sign up
            </Button>
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t"></div>
          </div>
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link to="/login" className="underline underline-offset-4">
              Log in
            </Link>
          </div>
        </form>
      )}
      {!display && (
        <div className="w-fit mx-auto" id="otpSection">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <span>
            Otp was sent to your Email <br />
          </span>
          <Button className="w-full">Verify</Button>
        </div>

        
      )}
    </>
  );
}
