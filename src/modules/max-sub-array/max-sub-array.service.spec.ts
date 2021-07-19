import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { RequestDTO } from './dtos/request.dto';
import { MaxSubArrayService } from './max-sub-array.service';

describe('MaxSubArrayService', () => {
  let service: MaxSubArrayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MaxSubArrayService],
    }).compile();

    service = module.get<MaxSubArrayService>(MaxSubArrayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('Exceptions', () => {
    it('Should be throw bad request because list is empty array', () => {
      const array: RequestDTO = { list: [] };
      const result = service.sumSubArray(array);
      expect(result).rejects.toBeInstanceOf(BadRequestException);
      expect(result).rejects.toThrowError("List can't be empty");
    });
    it('Should be throw bad request because list not is a array', () => {
      const array = { list: '' };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const result = service.sumSubArray(array);
      expect(result).rejects.toBeInstanceOf(BadRequestException);
      expect(result).rejects.toThrowError('List should be a array');
    });
  });
  describe('Request array [-2,3,5,-1,4,-5]', () => {
    const array: RequestDTO = { list: [-2, 3, 5, -1, 4, -5] };
    it('Should be return right result', async () => {
      jest.spyOn(service, 'sumSubArray');
      const result = await service.sumSubArray(array);
      expect(service.sumSubArray).toBeCalled();
      expect(service.sumSubArray).toBeCalledWith(array);
      expect(result.result).toBe(11);
    });
    it('Should be return wrong result', async () => {
      jest.spyOn(service, 'sumSubArray');
      const result = await service.sumSubArray(array);
      expect(service.sumSubArray).toBeCalled();
      expect(service.sumSubArray).toBeCalledWith(array);
      expect(result.result).not.toBe(12);
    });
  });
  describe('Request array [-2,1,-3,4,-1,2,1,-5,4]', () => {
    const array: RequestDTO = { list: [-2, 1, -3, 4, -1, 2, 1, -5, 4] };
    it('Should be return right result', async () => {
      jest.spyOn(service, 'sumSubArray');
      const result = await service.sumSubArray(array);
      expect(service.sumSubArray).toBeCalled();
      expect(service.sumSubArray).toBeCalledWith(array);
      expect(result.result).toBe(6);
    });
    it('Should be return wrong result', async () => {
      jest.spyOn(service, 'sumSubArray');
      const result = await service.sumSubArray(array);
      expect(service.sumSubArray).toBeCalled();
      expect(service.sumSubArray).toBeCalledWith(array);
      expect(result.result).not.toBe(12);
    });
  });
  describe('Request array [1, 2, 3, -2, 5]', () => {
    const array: RequestDTO = { list: [1, 2, 3, -2, 5] };
    it('Should be return right result', async () => {
      jest.spyOn(service, 'sumSubArray');
      const result = await service.sumSubArray(array);
      expect(service.sumSubArray).toBeCalled();
      expect(service.sumSubArray).toBeCalledWith(array);
      expect(result.result).toBe(9);
    });
    it('Should be return wrong result', async () => {
      jest.spyOn(service, 'sumSubArray');
      const result = await service.sumSubArray(array);
      expect(service.sumSubArray).toBeCalled();
      expect(service.sumSubArray).toBeCalledWith(array);
      expect(result.result).not.toBe(12);
    });
  });
  describe('Request array [-1, -2, -3, -4]', () => {
    const array: RequestDTO = { list: [-1, -2, -3, -4] };
    it('Should be return right result', async () => {
      jest.spyOn(service, 'sumSubArray');
      const result = await service.sumSubArray(array);
      expect(service.sumSubArray).toBeCalled();
      expect(service.sumSubArray).toBeCalledWith(array);
      expect(result.result).toBe(-1);
    });
    it('Should be return wrong result', async () => {
      jest.spyOn(service, 'sumSubArray');
      const result = await service.sumSubArray(array);
      expect(service.sumSubArray).toBeCalled();
      expect(service.sumSubArray).toBeCalledWith(array);
      expect(result.result).not.toBe(12);
    });
  });
});
