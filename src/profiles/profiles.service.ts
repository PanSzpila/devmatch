import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfilesService {
  private profiles = [
    {
      id: randomUUID(),
      name: 'John Doe',
      description: 'Fullstack Developer interested in cloud solutions',
    },
    {
      id: randomUUID(),
      name: 'Jane Smith',
      description: 'Backend Developer and database enthusiast',
    },
    {
      id: randomUUID(),
      name: 'Emily Johnson',
      description: 'Frontend wizard focused on UI/UX',
    },
  ];

  findAll() {
    return this.profiles;
  }

  findOne(id: string) {
    const profile = this.profiles.find((p) => p.id === id);
    if (!profile) {
      throw new NotFoundException('Profile not found.');
    }
    return profile;
  }

  create(createProfileDto: CreateProfileDto) {
    const exists = this.profiles.some(
      (p) =>
        p.name === createProfileDto.name &&
        p.description === createProfileDto.description,
    );
    if (exists) {
      throw new BadRequestException(
        'Profile with the same name and description already exists.',
      );
    }

    const newProfile = {
      id: randomUUID(),
      name: createProfileDto.name,
      description: createProfileDto.description,
    };
    this.profiles.push(newProfile);
    return newProfile;
  }

  update(id: string, updateProfileDto: UpdateProfileDto) {
    const profile = this.profiles.find((p) => p.id === id);
    if (!profile) {
      throw new BadRequestException('Profile not found.');
    }
    if (updateProfileDto.name !== undefined)
      profile.name = updateProfileDto.name;
    if (updateProfileDto.description !== undefined)
      profile.description = updateProfileDto.description;
    return profile;
  }

  remove(id: string) {
    const index = this.profiles.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new BadRequestException('Profile not found.');
    }
    const deletedProfile = this.profiles.splice(index, 1)[0];
    return deletedProfile;
  }
}
