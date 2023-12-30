import { TurnOnOff } from './TurnOnOff';
import { TurnedOn } from './TurnedOn';
import { TurnedOff } from './TurnedOff';
import { TurnButton } from './TurnButton';
import { P } from './P';

const s = {
  style: {
    fontSize: '60px',
  },
};

export const Compound = () => {
  return (
    <TurnOnOff>
      <TurnedOn>
        <P>Aqui as coisas que vão acontecer quando estiver ON</P>
      </TurnedOn>
      <TurnedOff>
        <P>Aqui vem as coisas do OFF</P>
      </TurnedOff>
      <TurnButton {...s} />
    </TurnOnOff>
  );
};
