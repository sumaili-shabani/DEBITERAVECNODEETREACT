export interface catBlog {
    id?: number;
    titre?: string;
}

export interface UiBlog {
    id?: number;
    titre?: string;
    sousTitre?: string;
    description?: string;
    idCategory?: number;
    status?: number;
    icone?: string;
    logoFile?: File;
    tug?: string;
    slug?: string; // string primitif
    createdAt?: string;
    updatedAt?: string;
    category_blog?: catBlog;
}
