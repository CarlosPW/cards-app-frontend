export interface Cards {
  id: number;
  createdAt: string;
  updatedAt: string;
  title: string;
  lastTimePracticed: string;
  userId: number;
  items: Item[];
}

export interface Item {
  id: string;
  title: string;
  description: string;
  cardId: number;
}

export interface CardItem {
  cardId: number;
  description: string;
  id: string;
  title: string;
}
