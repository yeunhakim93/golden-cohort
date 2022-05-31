import type { NextComponentType } from 'next'
import React, { useState, useRef, useCallback, Component } from 'react';
import styles from '../styles/Yearbook.module.css'
import CardsContainer from './CardsContainer';
import peopleList from '../data/people';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';


const Yearbook: NextComponentType = () => {

  // *************** for imgUrl *************** //
  const [imgUrls, setImgUrls] = useState(["https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/048.jpg","https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/18166-shivling-whatsapp-image-and-dp.jpg","https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/18416-navratri-image-for-whatsapp-and-facebook.jpg","https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/48-x-48-shower-base-view-larger-image-48-x-48-neo-angle-shower-pan.jpg","https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/50393e0e4a271042dba377c568f6654e.jpg","https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/6365035-windows-image.png","https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/Cockatoo_Sulphur-crested+3+(Harvey+Perkins).jpg","https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/Cockatoo_Sulphur-crested+2+(Geoffrey+Dabb).jpg"])

  const fetchNewUrl = (filter: string) => {
    //view all by default
    //posted by someone
    // const postedBy = (document.getElementById('filterPosts') as HTMLInputElement).value;
    //tagged someone
    // const tagged = (document.getElementById('filterTags') as HTMLInputElement).value;
    console.log(taggedFilter)
    console.log(postedByFilter)

    setImgUrls(["https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/media-box-image-shows-childrens-theatre-wctdracula-media-box-14991-image.png","https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/media-box-image-shows-childrens-theatre-wctshrek-media-box-15009-image.png","https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/outdoor-lighting-bollards-uk-bollard-lights-garden-light-full-image-for-exterior.jpg","https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/stacks-image-afec165.jpg","https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/stock-photo-image-of-a-mans-hand-showing-thumb-up-rainbow-flag-264495.jpg","https://s3-us-west-1.amazonaws.com/codesmith-precourse-images/wonderful-funny-animal-posters-and-interesting-ideas-of-cool-animals-pictures-demotivational-6.jpg"]);
  }
  

  // *************** for filters *************** //
  const [postedByFilter, setpostedByFilter] = useState([]);
  const [taggedFilter, setTaggedFilter] = useState([]);

  const peopleOptions = peopleList.map((elem) => {
    const name = elem.name;
    let firstL: string = name.slice(0,name.indexOf(' '))+name.slice(name.indexOf(' ')+1, name.indexOf(' ')+2);
    return {value: firstL, label: name};
  })

  const animatedComponents = makeAnimated();
  
  return (
    <div className={styles.yearbook_container}>
      <div className={styles.button_container}>
        <button className={styles.filter_button}>All</button>
        <Select
          isMulti
          name="postedBy"
          options={peopleOptions}
          components={animatedComponents}
          onChange={(postedBy: any)=>{setpostedByFilter(postedBy); console.log('yee', postedByFilter)}}
          className="basic-multi-select"
          classNamePrefix="select"
          isOptionDisabled={() => postedByFilter.length > 0}
        />
        <Select
          isMulti
          name="filterBy"
          options={peopleOptions}
          components={animatedComponents}
          onChange={(tagged: any)=>{setTaggedFilter(tagged); console.log('yes', taggedFilter)}}
          className="basic-multi-select"
          classNamePrefix="select"
          id="filterTags"
        />

        <button onClick={()=>{fetchNewUrl('filter by')}}>search</button>
      </div>
      <CardsContainer imageUrls={imgUrls} />
    </div>
  )
}

export default Yearbook
