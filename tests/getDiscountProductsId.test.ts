jest.mock('@/utils/getDiscountProductsId', () => ({
    getDiscountProductsId: jest.fn().mockResolvedValue([
        { value: 1, ids: [1, 2] },
        { value: 2, ids: [4, 5] },
        { value: 3, ids: [7, 8] },
        { value: 4, ids: [10, 11] },
        { value: 5, ids: [13, 14] }
    ])
}));


import { getDiscountProductsId } from '@/utils/getDiscountProductsId'
import '@testing-library/jest-dom'

describe('getDiscountProductIds Tests', () => {
    let discountProductsId: {value: number;ids: any[]}[];

    beforeEach(async() => {
        discountProductsId = await getDiscountProductsId("fetch");
        expect(getDiscountProductsId).toHaveBeenCalledWith("fetch");
    }, 100000)

    test('should return 5 discount product IDs', () => {
        expect(discountProductsId).toHaveLength(5);
    });

    test('each discount should have value and ids property', () => {
        expect(discountProductsId).toEqual(
            expect.arrayContaining(
                discountProductsId.map(discountProductId => expect.objectContaining({ 
                    value: expect.any(Number), 
                    ids: expect.any(Array)
                }))
            )
        );
    });
});