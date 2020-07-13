import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import PetCard from './../components/PetCard'
import LabeledSelect from './../components/common/LabeledSelect'
import { petsDB, typeOpt, dogBreedsOpt, ageOpt, sizeOpt, genderOpt } from './../petsDB'

const SearchPage = (props) => {
    const [type, setType] = useState("Animal");
    const [breeds, setBreeds] = useState([]);
    const [age, setAge] = useState([]);
    const [size, setSize] = useState([]);
    const [gender, setGender] = useState();

    return (
        <Wrapper>
            <SidePanel>
                <Selectors>
                    <LabeledSelect 
                        value={type}
                        label="TYPE"
                        options={typeOpt}
                        onChange={(evt) => setType(evt.value)}
                    />
                    <LabeledSelect
                        isMulti={true}
                        label="BREEDS"
                        options={dogBreedsOpt}
                        value={breeds}
                        onChange={(evt) => setBreeds((evt))}
                    />
                    <LabeledSelect
                        isMulti={true}
                        label="AGE"
                        options={ageOpt}
                        value={age}
                        onChange={(evt) => setAge(evt)}
                    />
                    <LabeledSelect
                        isMulti={true}
                        label="SIZE"
                        options={sizeOpt}
                        value={size}
                        onChange={(evt) => setSize(evt)}
                    />
                    <LabeledSelect
                        value={gender}
                        label="GENDER"
                        options={genderOpt}
                        onChange={(evt) => setGender(evt.value)}
                    />
                </Selectors>
            </SidePanel>
            <ListingContainer>
                <Title>
                    Available {type}s for Adoption:
                </Title>
                <ListingWrapper>
                    {petsDB.map((pet) =>
                        <StyledLink to={pet.id}>
                            <PetCard name={pet.name} key={pet.id} imgs={pet.imgs} id={pet.id} />
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