import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import { User, Mail, Lock, Eye, EyeOff, CheckCircle, XCircle } from 'lucide-react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Password validation rules
  const passwordRules = [
    { rule: 'At least 12 characters', test: (pwd: string) => pwd.length >= 12 },
    { rule: 'One uppercase letter', test: (pwd: string) => /[A-Z]/.test(pwd) },
    { rule: 'One lowercase letter', test: (pwd: string) => /[a-z]/.test(pwd) },
    { rule: 'One number', test: (pwd: string) => /\d/.test(pwd) },
    { rule: 'One special character', test: (pwd: string) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd) }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate password meets all requirements
    const allRulesPassed = passwordRules.every(rule => rule.test(formData.password));
    if (!allRulesPassed) {
      toast({
        title: "Password Requirements Not Met",
        description: "Please ensure your password meets all the requirements.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Account Created Successfully!",
        description: "Welcome to Sujit Enterprises. You can now sign in.",
      });
      setIsLoading(false);
      // In real app, redirect to login or dashboard
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen gradient-section flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary">
            Create Account
          </h2>
          <p className="mt-2 text-muted-foreground">
            Join Sujit Enterprises community
          </p>
        </div>

        <Card className="shadow-floating">
          <CardHeader>
            <CardTitle className="text-center text-primary">Sign Up</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="flex items-center space-x-2 mb-2">
                  <User className="w-4 h-4 text-primary" />
                  <span>Full Name</span>
                </Label>
                <div className="relative">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="pl-10"
                    placeholder="Enter your full name"
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="flex items-center space-x-2 mb-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>Email Address</span>
                </Label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="pl-10"
                    placeholder="Enter your email"
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="flex items-center space-x-2 mb-2">
                  <Lock className="w-4 h-4 text-primary" />
                  <span>Password</span>
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    value={formData.password}
                    onChange={handleInputChange}
                    className="pl-10 pr-10"
                    placeholder="Create a strong password"
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <Eye className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                </div>
                
                {/* Password Requirements */}
                {formData.password && (
                  <div className="mt-3 space-y-2">
                    <p className="text-sm font-medium text-foreground">Password Requirements:</p>
                    {passwordRules.map((rule, index) => {
                      const passed = rule.test(formData.password);
                      return (
                        <div key={index} className="flex items-center space-x-2">
                          {passed ? (
                            <CheckCircle className="w-4 h-4 text-success" />
                          ) : (
                            <XCircle className="w-4 h-4 text-destructive" />
                          )}
                          <span className={`text-xs ${passed ? 'text-success' : 'text-muted-foreground'}`}>
                            {rule.rule}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                className="w-full shadow-button"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Sign Up"}
              </Button>

              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  Already a member?{' '}
                  <Link to="/login" className="text-primary hover:text-primary-dark font-medium transition-smooth">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            By creating an account, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;