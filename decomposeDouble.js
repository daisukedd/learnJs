function decomposeDouble(number) {
    // Converter o número para uma representação de 64 bits
    let buffer = new ArrayBuffer(8); // 64 bits = 8 bytes
    let floatArray = new Float64Array(buffer);
    floatArray[0] = number;

    // Acessar os bits de forma bruta
    let uintArray = new Uint32Array(buffer);
    let bits = uintArray[0]; // Acessar diretamente o valor do primeiro elemento

    // Separar os bits em sinal, expoente e mantissa
    let sign = (bits & 0x80000000) >>> 31; // Corrigido para 32 bits de sinal
    let exponent = (bits & 0x7FF00000) >>> 20; // Corrigido para 32 bits de expoente
    let mantissa = bits & 0x000FFFFF; // Corrigido para 32 bits de mantissa

    return {
        sign: sign,
        exponent: exponent,
        mantissa: mantissa
    };
}

// Exemplo de uso
let numero = 3.14;
let decomposicao = decomposeDouble(numero);
console.log("Bit de sinal:", decomposicao.sign);
console.log("Expoente:", decomposicao.exponent);
console.log("Mantissa:", decomposicao.mantissa);
