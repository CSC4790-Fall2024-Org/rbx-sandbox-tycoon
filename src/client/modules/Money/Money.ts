import { UI } from "client/onload/UI/currency";
import { BigNumber } from "shared/modules/BigNumber/BigNumber";


export namespace Money {
    const State = {
        Money: new BigNumber(0),
    }

    export const GetMoney = () => {
        return State.Money;
    }

    export const AddMoney = (Value: BigNumber) => {
        const Final = State.Money.Add(Value);
        UI.Currency.TweenMoney(State.Money, Final);
        State.Money = Final;
    }
}