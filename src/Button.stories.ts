import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Base Components/Button',
  tags: ['autodocs'],
};

//nuova storia per il bottone
//modificare il componente BUtton per supportare la disabilitazione 
//aggiungere una priorità per disattivare il bottone
//se la priorità è null gestire all'onclick prima la disabilitazione
//simulare l'operazione del click con un setTimeout di 5 second
//dopo 5 secondi rimuovere la proprietà di disabilitazione e riattivare il bottone


export default meta;

type Story = StoryObj<typeof Button>;

export const Standard: Story = {
  args: {
    label: 'Standard',
    mode: 'standard',
    onClick: () => alert('Cliccato!'),
  },
};

export const ConAttesa: Story = {
  args: {
    label: 'Attendere 5 secondi',
    mode: 'wait',
    onClick: () => alert('Operazione completata dopo 5 secondi!'),
  },
};

export const Disabilitato: Story = {
  args: {
    label: 'Disabilitato',
    mode: 'disabled',
    onClick: () => alert('Non dovrebbe mai attivarsi'),
  },
};
