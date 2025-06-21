"use client";

import type React from "react";
import { useState } from "react";
import { Camera } from "lucide-react";
import api from "@/lib/api"; // Assume this is configured
import { toast } from "@/components/ui/use-toast"; // Assume toast is available

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface EditProfileDialogProps {
    isOpen: boolean;
    onClose: () => void;
    userData: {
      name: string;
      email: string;
      username: string;
      profileImage: string;
      bio: string;
      location: string;
      website: string;
  };
  setUserData: React.Dispatch<React.SetStateAction<any>>;
}

export function EditProfileDialog({ isOpen, onClose, userData, setUserData }: EditProfileDialogProps) {
  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
    username: userData.username,
    bio: userData.bio,
    location: userData.location,
    website: userData.website,
  });
  const [profileImage, setProfileImage] = useState(userData.profileImage);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    setIsLoading(true);
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("bio", formData.bio);
    formDataToSend.append("location", formData.location);
    formDataToSend.append("website", formData.website);
    const input = document.getElementById("profile-image") as HTMLInputElement | null;
        if (input?.files?.[0]) {
        formDataToSend.append("profile_image", input.files[0]);
        }

    try {
      const response = await api.post("/user/profile", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUserData((prev: any) => ({ ...prev, ...response.data }));
      toast({
        title: "Success",
        description: "Profile updated successfully!",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update profile.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>Make changes to your profile here. Click save when you're done.</DialogDescription>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <Avatar className="h-24 w-24">
                <AvatarImage src={profileImage} alt={formData.name} />
                <AvatarFallback className="text-lg">
                  {formData.name.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <label
                htmlFor="profile-image"
                className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-purple-600 hover:bg-purple-700 text-white border-2 border-white dark:border-gray-900 cursor-pointer flex items-center justify-center transition-colors"
              >
                <Camera className="h-4 w-4" />
              </label>
              <input id="profile-image" type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
            </div>
            <p className="text-xs text-muted-foreground text-center">Click the camera icon to upload a new profile picture</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter your full name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                value={formData.username}
                onChange={(e) => handleInputChange("username", e.target.value)}
                placeholder="Enter your username"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={formData.bio}
                onChange={(e) => handleInputChange("bio", e.target.value)}
                placeholder="Tell us about yourself..."
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
                placeholder="Enter your location"
              />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={isLoading}>
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}