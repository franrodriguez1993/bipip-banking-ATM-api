import Account from '../../account/entities/account.entity';
import TypeAccount from '../../account/entities/typeaccount.entity';
import Address from '../../user/entities/address.entity';
import User from '../../user/entities/user.entity';
import Creditcard from '../entities/creditcard.entity';

export default class CreditCardRepository {
  /** GET BY NUMBER **/
  async getByNumber(number_card: string) {
    return await Creditcard.findOne({
      where: { number_card },
      include: [
        {
          model: Account,
          include: [
            {
              model: TypeAccount,
            },
            {
              model: User,
            },
          ],
        },
        {
          model: User,
          include: [
            {
              model: Address,
            },
          ],
        },
      ],
    });
  }

  /** UPDATE PASSWORD  **/
  async updatePass(number_card: string, pass: string) {
    return await Creditcard.update(
      { password: pass },
      { where: { number_card } },
    );
  }
}
