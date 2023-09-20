import Account from '../entities/account.entity';
import TypeAccount from '../entities/typeaccount.entity';

export default class AccountRepository {
  /**  GET ONE BY NUMBER **/
  async getOneByNumber(number_account: string) {
    return await Account.findByPk(number_account, {
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [
        {
          model: TypeAccount,
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
      ],
    });
    return await Account.findOne({
      where: { number_account },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [
        {
          model: TypeAccount,
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
      ],
    });
  }

  /**  GET ALL BY USER **/
  async getAllByUser(id: string) {
    return await Account.findAll({
      where: { id_user: id },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      include: [
        {
          model: TypeAccount,
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
      ],
    });
  }

  /**  UPDATE MONEY ACCOUNT  **/
  async updateMoneyAccount(number_account: string, money: number) {
    return await Account.update({ money }, { where: { number_account } });
  }
}
