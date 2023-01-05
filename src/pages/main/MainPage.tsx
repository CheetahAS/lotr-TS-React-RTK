import React, {useState, useEffect} from 'react';
import Layout from '../../components/layout/Layout';
import Modal from '../../components/Modal/Modal';
import style from './MainPage.module.scss';
import { ICharacter } from '../../services/types';
import { getAllCharacters } from '../../services/Api';



const MainPage:React.FC = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [character, setCharacter] = useState<ICharacter>();

    const searchedCharacter = (charName:string): void => {
        setCharacter(characters.find(({ name }) => name.toLowerCase() === charName.toLowerCase()));
    };

    useEffect(() => {
        getAllCharacters().then(result => setCharacters(result));
    }, []);

    return (
        <>
        <Layout setIsModalVisible={setIsModalVisible} searchedCharacter={(charName) => searchedCharacter(charName)}/>
        {isModalVisible && character && <Modal isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} character={character}/>}
        <div className={style.main_page_outer_wrapper}>
            <h1>J. R. R. Tolkien</h1>
            <div className={style.main_page_inner_wrapper}>
                    <img 
                        src={require("../../images/JRR_Tolkien.jpg")}
                        alt="JRR Tolkien" 
                    />
                    <article>
                        <p>
                        <strong>John Ronald Reuel Tolkien</strong> 3 January 1892 – 2 September 1973 was an English writer and philologist. He was the author of the high fantasy works The Hobbit and The Lord of the Rings.</p>
                        <p>
                        From 1925 to 1945, Tolkien was the Rawlinson and Bosworth Professor of Anglo-Saxon and a Fellow of Pembroke College, both at the University of Oxford. He then moved within the same university to become the Merton Professor of English Language and Literature and Fellow of Merton College, and held these positions from 1945 until his retirement in 1959. Tolkien was a close friend of C. S. Lewis, a co-member of the informal literary discussion group The Inklings. He was appointed a Commander of the Order of the British Empire by Queen Elizabeth II on 28 March 1972.</p>
                        <p>
                        After Tolkien's death, his son Christopher published a series of works based on his father's extensive notes and unpublished manuscripts, including The Silmarillion. These, together with The Hobbit and The Lord of the Rings, form a connected body of tales, poems, fictional histories, invented languages, and literary essays about a fantasy world called Arda and, within it, Middle-earth. Between 1951 and 1955, Tolkien applied the term legendarium to the larger part of these writings.
                        </p>
                        <p>
                        While many other authors had published works of fantasy before Tolkien, the great success of The Hobbit and The Lord of the Rings led directly to a popular resurgence of the genre. This has caused him to be popularly identified as the "father" of modern fantasy  literature—or, more precisely, of high fantasy.
                        </p>
                    </article>
                    
            </div>

            <h1>The Lord of the Rings</h1>
            <div className={style.main_page_inner_wrapper}>
                    <img 
                        src={require("../../images/Lotr_book.gif")}
                        alt="The Lord of the Rings" 
                    />
                    <article>
                        <p>
                        <strong>The Lord of the Rings</strong> is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien. Set in Middle-earth, intended to be Earth at some time in the distant past, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.</p>
                        <p>
                        The title refers to the story's main antagonist, the Dark Lord Sauron, who, in an earlier age, created the One Ring to rule the other Rings of Power given to Men, Dwarves, and Elves, in his campaign to conquer all of Middle-earth. From homely beginnings in the Shire, a hobbit land reminiscent of the English countryside, the story ranges across Middle-earth, following the quest to destroy the One Ring mainly through the eyes of the hobbits Frodo, Sam, Merry and Pippin.</p>
                        <p>
                        Although often called a trilogy, the work was intended by Tolkien to be one volume of a two-volume set along with The Silmarillion. For economic reasons, The Lord of the Rings was published over the course of a year from 29 July 1954 to 20 October 1955 in three volumes titled The Fellowship of the Ring, The Two Towers, and The Return of the King. The work is divided internally into six books, two per volume, with several appendices of background material. Some later editions print the entire work in a single volume, following the author's original intent.
                        </p>
                        <p>
                        Tolkien's work, after an initially mixed reception by the literary establishment, has been the subject of extensive analysis of its themes and origins. Influences on this earlier work, and on the story of The Lord of the Rings, include philology, mythology, Christianity, earlier fantasy works, and his own experiences in the First World War.
                        </p>
                        <p>
                        The Lord of the Rings has since been reprinted many times and translated into at least 38 languages. Its enduring popularity has led to numerous references in popular culture, the founding of many societies by fans of Tolkien's works, and the publication of many books about Tolkien and his works. It has inspired many derivative works, including paintings, music, films, television, video games, and board games. It has helped to create and shape the modern fantasy genre, within which it is considered one of the greatest books of all time.
                        </p>
                        <p>
                        Award-winning adaptations of The Lord of the Rings have been made for radio, theatre, and film. It has been named Britain's best-loved novel of all time in the BBC's 2003 poll The Big Read.
                        </p>
                    </article>
            </div>
        </div>
        </>
    );
};

export default MainPage;