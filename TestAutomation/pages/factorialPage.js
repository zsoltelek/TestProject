const { I } = inject();

module.exports = {

  field: {
    input: '#number',
    result: '#resultDiv'
  },
  button: {
    calculate: '#getFactorial'
  },
  links: {
    termsAndConditions: locate('a').withText('Terms and Conditions'),
    privacy: locate('a').withText('Privacy'),
    qxf2: locate('a').withText('Qxf2 Services')
  },

  calculate(input) {
    I.fillField(this.field.input, input);
    I.click(this.button.calculate);
  }
}