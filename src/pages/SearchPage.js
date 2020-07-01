import React from 'react'
import styled from 'styled-components'
import PetListing from './../components/PetListing'
import petsDB from './../petsDB'

const SearchPage = (props) => {
    return(
        <Wrapper>
            <SidePanel>
                <Selectors>
                    field <br/>
                    field <br/>
                    field <br/>
                    field <br/>
                </Selectors>
            </SidePanel>
            <ListingContainer>
                <PetListing pets={petsDB}/>
            </ListingContainer>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
`

const SidePanel = styled.div`
    width: 200px;
`

const Selectors = styled.div`
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    font-size: ${props => props.theme.fontSizes.text};
`

const ListingContainer = styled.div`
`
export default SearchPage