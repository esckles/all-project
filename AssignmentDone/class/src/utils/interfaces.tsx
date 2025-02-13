export interface iCard {
  id: string;
  title: string;
}

export interface iColumn {
  id: number;
  data: iCard[];
}

export interface iData {
  task: iColumn;
  progress: iColumn;
  done: iColumn;
}

export interface iCardProps {
  card: iCard;
  columnName: keyof iData;
  onMove: (card: iCard, from: keyof iData, to: keyof iData) => void;
  onRemove: (card: iCard, from: keyof iData) => void;
}
