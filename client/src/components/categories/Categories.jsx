import React from 'react'

function Categories() {
  return (
        <>
            
        <section className="categories">
            <div className="container categories_container">
                <div className="categories_left">
                    <h1>Categories</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas voluptatum ab in corporis quis molestiae
                        possimus vel temporibus error. Voluptatem cum harum ipsum facilis ducimus veritatis optio, nihil qui
                        provident.
                    </p>
                    <a href="index.html" className="btn" >Learn More </a>
                </div>
                <div className="categories__right">
                        <article className="category">
                            <span className="category__icon">
                            <i className="uil uil-bitcoin-circle"></i>
                            </span>
                            <h5>Blockchain</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p>
                        </article>

                        <article className="category">
                            <span className="category__icon">
                            <i className="uil uil-palette"></i>
                            </span>
                            <h5>Blockchain</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p>
                        </article>

                        <article className="category">
                            <span className="category__icon">
                            <i className="uil uil-usd-circle"></i>
                            </span>
                            <h5>Blockchain</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p>
                        </article>

                        <article className="category">
                            <span className="category__icon">
                            <i className="uil uil-megaphone"></i>
                            </span>
                            <h5>Blockchain</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p>
                        </article>
                        
                        <article className="category">
                            <span className="category__icon">
                            <i className="uil uil-music"></i>
                            </span>
                            <h5>Blockchain</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p>
                        </article>
                        
                        <article className="category">
                            <span className="category__icon">
                            <i className="uil uil-bitcoin-circle"></i>
                            </span>
                            <h5>Blockchain</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, nisi.</p>
                        </article>
                    </div>
                
            </div>
        </section>


        </>
  )
}

export default Categories



// import { Button, Table, TableHead, TableRow, TableCell, TableBody, styled } from '@mui/material';
// import { Link, useSearchParams } from 'react-router-dom';

// import { categories } from '../../constants/data';

// const StyledTable = styled(Table)`
//     border: 1px solid rgba(224, 224, 224, 1);
// `;
    
// const StyledButton = styled(Button)`
//     margin: 20px;
//     width: 85%;
//     background: #6495ED;
//     color: #fff;
//     text-decoration: none;
// `;
    
// const StyledLink = styled(Link)`
//     text-decoration: none;
//     color: inherit;
// `;

// const Categories = () => {
//     const [searchParams] = useSearchParams();
//     const category = searchParams.get('category');
    
//     return (
//         <>
//             <Link to={`/create?category=${category || ''}`} style={{ textDecoration: 'none' }}>
//                 <StyledButton variant="contained">Create Course</StyledButton>
//             </Link>
            
//             <StyledTable>
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>
//                             <StyledLink to={"/"}>
//                                 All Categories
//                             </StyledLink>
//                         </TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {
//                         categories.map(category => (
//                             <TableRow key={category.id}>
//                                 <TableCell>
//                                     <StyledLink to={`/?category=${category.type}`}>
//                                         {category.type}
//                                     </StyledLink>
//                                 </TableCell>
//                             </TableRow>
//                         ))
//                     }
//                 </TableBody>
//             </StyledTable>
//         </>
//     )
// }

// export default Categories;