const NoPermissionError = require('../../errors/NoPermissionError');
const generator = require('../../helpers/generator');

module.exports = ({ req }) => {
    const token = req.headers.authorization;

    return {
      validate() {
        try {
          const { id } = generator.verifyToken(token);
          return id;
        } catch(e) {
          throw new NoPermissionError('Usuário não autenticado');
        }
      }
    };
};