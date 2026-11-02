const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    return this._process(message, key, 'encrypt');
  }

  decrypt(encryptedMessage, key) {
    return this._process(encryptedMessage, key, 'decrypt');
  }

  _process(text, key, mode) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }

    const upperText = text.toUpperCase();
    const upperKey = key.toUpperCase();
    const result = [];
    let keyIndex = 0;

    for (let i = 0; i < upperText.length; i++) {
      const char = upperText[i];
      const charCode = char.charCodeAt(0);

      // Check if character is an uppercase English letter (A-Z)
      if (charCode >= 65 && charCode <= 90) {
        const textCharIdx = this.alphabet.indexOf(char);
        const keyChar = upperKey[keyIndex % upperKey.length];
        const keyCharIdx = this.alphabet.indexOf(keyChar);

        let newIdx;
        if (mode === 'encrypt') {
          newIdx = (textCharIdx + keyCharIdx) % 26;
        } else {
          newIdx = (textCharIdx - keyCharIdx + 26) % 26;
        }

        result.push(this.alphabet[newIdx]);
        keyIndex++; // Advance key index only when a letter is processed
      } else {
        // Non-alphabet characters remain unchanged
        result.push(char);
      }
    }

    // If machine is reverse (false), reverse the resulting array
    if (!this.isDirect) {
      result.reverse();
    }

    return result.join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
