export type Game = {
    id: number
    created_at: string
    title: string
    platform: string
    release_year?: number
    genre?: string
    cover_image?: string
    user_id: string 
    status: 'playing' | 'completed' | 'backlog' | 'dropped'
    rating?: number
    notes?: string
  }
  
  export type Database = {
    public: {
      Tables: {
        games: {
          Row: Game
          Insert: Omit<Game, 'id' | 'created_at'>
          Update: Partial<Omit<Game, 'id' | 'created_at'>>
        }
      }
    }
  }