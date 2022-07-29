import { IsNotEmpty, IsUrl, Length, IsEnum, validate, validateOrReject, IsOptional } from 'class-validator';
import { AccessType, Category } from "../models/category.model";

export interface ICreateCategoryDto extends Omit<Category, 'id'>{}

export class CreateCategoryDto implements ICreateCategoryDto {
    @IsNotEmpty()
    @Length(4, 140)
    name!: string;

    @IsUrl()
    @IsNotEmpty()    
    image!: string;

    @IsOptional()
    @IsEnum(AccessType)
    access?: AccessType | undefined;
}

(async() => {

    try {
        const dto = new CreateCategoryDto();
        dto.name = 'wwwwwww';
        dto.image = 'https://test.com.co/image';
        await validateOrReject(dto);        
    } catch (error) {
        console.log(error);        
    }
})();