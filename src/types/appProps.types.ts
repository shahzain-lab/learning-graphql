import { ProfileRepository, UserRepositories } from "./repositories.types";

export interface ContextProps {
    children: React.ReactNode;
};

export interface RepositoryProps {
    node: UserRepositories;
};

export interface ProfileProps {
    node: ProfileRepository;
}