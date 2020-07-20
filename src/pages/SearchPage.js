import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import PetCard from './../components/PetCard'
import LabeledSelect from './../components/common/LabeledSelect'
import { petsDB, typeOpt, dogBreedsOpt, ageOpt, sizeOpt, genderOpt } from './../petsDB'
import { ROOT, PETS } from '../configuration/pathes'

const SearchPage = (props) => {
    const location = useLocation();
    const [type, setType] = useState(location.state ? location.state.animalType: "Animal");
    const [breeds, setBreeds] = useState([]);
    const [age, setAge] = useState([]);
    const [size, setSize] = useState([]);
    const [gender, setGender] = useState("");

    console.log(location.state ? location.state.animalType : "none");

    return (
        <Wrapper>
            <SidePanel>
                <Selectors>
                    <LabeledSelect 
                        value={type}
                        label="TYPE"
                        options={typeOpt}
                        onChangeHandler={setType}
                    />
                    <LabeledSelect
                        isMulti={true}
                        label="BREEDS"
                        options={dogBreedsOpt}
                        value={breeds}
                        onChangeHandler={setBreeds}
                    />
                    <LabeledSelect
                        isMulti={true}
                        label="AGE"
                        options={ageOpt}
                        value={age}
                        onChangeHandler={setAge}
                    />
                    <LabeledSelect
                        isMulti={true}
                        label="SIZE"
                        options={sizeOpt}
                        value={size}
                        onChangeHandler={setSize}
                    />
                    <LabeledSelect
                        value={gender}
                        label="GENDER"
                        options={genderOpt}
                        onChangeHandler={setGender}
                    />
                </Selectors>
            </SidePanel>
            <ListingContainer>
                <Title>
                    Available {type}s for Adoption:
                </Title>
                <ListingWrapper>
                    {petsDB.map(({id, name, imgs}) =>
                        <StyledLink to={ROOT + PETS + "/" + id} key={id}>
                            <PetCard name={name} imgs={imgs} id={id} />
                        </StyledLink>
                    )}
                </ListingWrapper>
            </ListingContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    margin-top: 80px;
`

const SidePanel = styled.div`
    margin-right: 50px;
`

const Selectors = styled.div`
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    font-size: ${props => props.theme.fontSizes.text};
`

const ListingContainer = styled.div`
`

const ListingWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: ${props => props.theme.screenWidthBreakPoints.ipad}) {
        flex-direction: column;
    }
`
const StyledLink = styled(Link)`
     text-decoration: none;
`

const Title = styled.div`
    font-size: ${props => props.theme.fontSizes.title};
    margin-bottom: 20px;
`

export default SearchPage