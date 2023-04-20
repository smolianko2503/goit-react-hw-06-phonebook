import { Section } from './Section/Section';
import { Phonebook } from './Phonebook/Phonebook';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Section title={'Phonebook'} />
      <Phonebook />
      <Section title={'Contacts'} />
      <Filter />
      <ContactsList />
      <GlobalStyle />
    </Container>
  );
};
