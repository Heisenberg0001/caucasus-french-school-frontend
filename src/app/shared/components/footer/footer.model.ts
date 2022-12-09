export interface FooterDto {
  administration: PersonInfoDto[];
  schoolOffice: PersonInfoDto;
}

export interface PersonInfoDto {
  name?: string;
  speciality: string;
  telephone: string;
  email: string;
}
