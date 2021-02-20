import React from "react";

const StepsText = () => {

  const step1 = "1: fgjh kdjfgh kgh kshdg kshgksdjhgs kdh skghksjgh kds"
      + "fkjdhfsh sd sdhg skjdfh sjkdhf sdkjhf dskjhf skdjhf skfksdhf ksdhf ksdjhf skjdhf"
      + "ksjdhf kjsdfksjfsdf ksdjh ksdhfjks df jkdfhskjhjsfhg fgjh kdjfgh kgh "
      + "kshdg kshgksdjhgs kdh skghksjgh kds fkjdhfsh sd sdhg skjdfh sjkdhf sdkjhf dskjhf "
      + "skdjhf skfksdhf ksdhf ksdjhf skjdhf ksjdhf kjsdfksjfsdf ksdjh ksdhfjks df";

  const step2 = "2: jkdfhskjhjsfhg fgjh kdjfgh kgh kshdg kshgksdjhgs kdh skghksjgh kds"
      + "fkjdhfsh sd sdhg skjdfh sjkdhf sdkjhf dskjhf skdjhf skfksdhf ksdhf ksdjhf skjdhf"
      + "ksjdhf kjsdfksjfsdf ksdjh ksdhfjks df jkdfhskjhjsfhg fgjh kdjfgh kgh "
      + "kshdg kshgksdjhgs kdh skghksjgh kds fkjdhfsh sd sdhg skjdfh sjkdhf sdkjhf dskjhf "
      + "skdjhf skfksdhf ksdhf ksdjhf skjdhf ksjdhf kjsdfksjfsdf ksdjh ksdhfjks df";

  const step3 = "3: jkdfhskjhjsfhg fgjh kdjfgh kgh kshdg kshgksdjhgs kdh skghksjgh kds"
      + "fkjdhfsh sd sdhg skjdfh sjkdhf sdkjhf dskjhf skdjhf skfksdhf ksdhf ksdjhf skjdhf"
      + "ksjdhf kjsdfksjfsdf ksdjh ksdhfjks df jkdfhskjhjsfhg fgjh kdjfgh kgh "
      + "kshdg kshgksdjhgs kdh skghksjgh kds fkjdhfsh sd sdhg skjdfh sjkdhf sdkjhf dskjhf "
      + "skdjhf skfksdhf ksdhf ksdjhf skjdhf ksjdhf kjsdfksjfsdf ksdjh ksdhfjks df";

  const step4 = "4: jkdfhskjhjsfhg fgjh kdjfgh kgh kshdg kshgksdjhgs kdh skghksjgh kds"
      + "fkjdhfsh sd sdhg skjdfh sjkdhf sdkjhf dskjhf skdjhf skfksdhf ksdhf ksdjhf skjdhf"
      + "ksjdhf kjsdfksjfsdf ksdjh ksdhfjks df jkdfhskjhjsfhg fgjh kdjfgh kgh "
      + "kshdg kshgksdjhgs kdh skghksjgh kds fkjdhfsh sd sdhg skjdfh sjkdhf sdkjhf dskjhf "
      + "skdjhf skfksdhf ksdhf ksdjhf skjdhf ksjdhf kjsdfksjfsdf ksdjh ksdhfjks df";

  const thisStep = "step" + this.props.numb;

  return (
    <div>
      <p>{thisStep}</p>
    </div>
  );
}

export default StepsText;
