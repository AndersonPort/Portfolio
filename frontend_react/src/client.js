import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '15z9qx6x',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skXWmjGEL1sD7ddYCZpk51KxVAVhjplgp8VpuMcEBe7eOwXY7MWRyL82YsdVijwIOmxlUhCQ3qGk8EVI2RSxqVbndub5PNZ3nKsIrPmhqAg83xl5vT03XWlnKNtxu2HSruPqeHw3P0qLlYx3pC8YiF1kisxoxX6smjLXSSI8xzFW2nPeuHFi',
});