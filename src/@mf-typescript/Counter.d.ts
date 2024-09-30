export interface CounterProps {
  label?: string;
  onIncrement?: () => void;
  onDecrement?: () => void;
  icon?: React.ReactElement;
  startingValue?: number;
}
