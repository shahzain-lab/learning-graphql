 export type UserNode<T> = {
    node: T;
  }
  
  export interface Languages {
    id?: string;
    name?: string;
    color?: string
  }
 
  interface LanguagesArray {
    edges: UserNode<Languages>[]
  }
  
  export interface ProfileRepository {
    id: string;
    url: string;
    name: string;
    languages?: LanguagesArray;
    updatedAt?: Date;
    description?: string;
  }

  export interface UserRepositories{
    id?: string;
    name?: string;
    stargazerCount: number;
    viewerHasStarred: boolean;
    url?: string;
    updatedAt?: Date;
    forkCount: number;
    description?: string;
    createdAt: Date;
    isPrivate: boolean;
  }
  
 