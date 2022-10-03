import Cipher from './../src/cipher.js';

describe('Cipher', ()=> {

  test('should correctly create a calculator', ()=>{
    const cipher = new Cipher("test sentence la la")
    expect(cipher.word).toEqual("test sentence la la");

  });
});