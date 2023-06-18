import React from 'react';
import { NavLink } from 'react-router-dom';
const Paticipation = () => {
    return (
        <div className='min-h-[70vh] my-[150px] p-10 bg-gray-300'>
            <div>
                <>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla accusantium aperiam quasi minima! Vitae velit est hic
                    dicta sint eos explicabo doloribus sed ullam? Optio adipisci
                    officiis vitae molestias corrupti harum ex neque ab, quasi
                    magni quo minus nihil iusto omnis. Pariatur incidunt
                    similique facere, voluptas laborum dolores officiis ad enim,
                    ab modi, optio odit doloribus. Deleniti, hic enim! Explicabo
                    labore ducimus quis tempora minus? Nisi, magni quia
                    cupiditate maiores sunt nesciunt quo rerum id debitis
                    quibusdam dolorem fugiat tenetur molestias sit eaque quas
                    quasi asperiores? Sint facilis molestiae quia eos
                    accusantium, delectus expedita? Autem, doloremque. Qui
                    adipisci quas architecto in quam tenetur autem fuga dolorum
                    culpa numquam rem inventore quisquam quo modi pariatur vel,
                    beatae odit natus vitae fugit accusantium voluptates
                    veritatis dolore eaque. Porro magnam voluptatum accusantium
                    cum quisquam laboriosam facilis et ratione quam? Officiis a
                    debitis porro recusandae corrupti laudantium. Dignissimos
                    praesentium accusantium exercitationem ducimus sapiente
                    error, eaque consequatur fuga itaque, expedita molestiae
                    repellendus? Ducimus reprehenderit doloribus sint earum.
                    Perspiciatis quam quasi libero magnam. Itaque quam voluptate
                    facere repellat vel, repellendus, provident expedita quas
                    molestiae eos delectus dolore aliquid nam facilis sit
                    officiis. Minima et quibusdam adipisci, consequatur
                    repellendus nemo quisquam aut labore laborum consequuntur
                    placeat saepe?
                </>
            </div>
            <div className='mt-40 flex justify-around'>
                <div
                    className='border-[1px] bg-black  font-bold p-3 '
                    style={{ color: 'rgb(253 224 71)' }}
                >
                    <NavLink to='/users/newuser'> Registration form </NavLink>
                </div>
                <div
                    className='border-[1px] bg-black text-white font-bold border-black p-3 '
                    style={{ color: 'rgb(253 224 71)' }}
                >
                    <NavLink to='/login'> Sing In </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Paticipation;
