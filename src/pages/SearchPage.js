import React, {useState} from 'react'
import styled from 'styled-components'
import PetListing from './../components/PetListing'
import LabeledSelect from './../components/common/LabeledSelect'
import { petsDB, typeOpt, dogBreedsOpt, ageOpt, sizeOpt, genderOpt } from './../petsDB'

const SearchPage = (props) => {
    const [type, setType] = useState("Animal");
    const [breeds, setBreeds] = useState([]);
    const [age, setAge] = useState([]);
    const [size, setSize] = useState([]);
    const [gender, setGender] = useState();

    const getStringValues = (value) => {
        return value == null ? [] : value.map((item) => item.value);
    }

    return(
        <Wrapper>
            <SidePanel>
                <Selectors>
                    <LabeledSelect value={type} label="TYPE" options={typeOpt} onChange={(evt) => setType(evt.value)}/>
                    <LabeledSelect  isMulti={true} label="BREEDS" options={dogBreedsOpt} value={breeds} onChange={(evt) => setBreeds(getStringValues(evt))}/>
                    <LabeledSelect  isMulti={true} label="AGE" options={ageOpt} value={age} onChange={(evt) => setAge(getStringValues(evt))}/>
                    <LabeledSelect  isMulti={true} label="SIZE" options={sizeOpt} value={size} onChange={(evt) => setSize(getStringValues(evt))}/>
                    <LabeledSelect  value={gender} label="GENDER" options={genderOpt} onChange={(evt) => setGender(evt.value)}/>
                </Selectors>
            </SidePanel>
            <ListingContainer>
                <Title>
                    Available {type}s for Adoption:
                </Title>
                <PetListing pets={petsDB}/>
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

const Title = styled.div`
    font-size: ${props => props.theme.fontSizes.title};
    margin-bottom: 20px;
`

export default SearchPage