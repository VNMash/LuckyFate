export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  component?: React.ComponentType;
}

export interface Winner {
  id: string;
  name: string;
  avatar: string;
  prize: string;
  prizeImage: string;
  winDate: string;
  ticketNumber: string;
  prizeValue: number;
  category: string;
  testimonial?: string;
}

export interface UserTicket {
  id: string;
  lotteryId: string;
  lotteryTitle: string;
  lotteryImage: string;
  ticketNumber: string;
  purchaseDate: string;
  status: 'active' | 'won' | 'lost';
  drawDate: string;
  ticketPrice: number;
  category: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  joinDate: string;
  totalTickets: number;
  totalWins: number;
  totalSpent: number;
  favoriteCategories: string[];
  achievements: Achievement[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedDate: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}