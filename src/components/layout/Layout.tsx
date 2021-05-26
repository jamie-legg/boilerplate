export interface ILayoutProps  { 
    children: React.ReactNode
 }

export default function Layout({ children }: ILayoutProps) {
    return(
        <div>
            {children}
        </div>
    )
}