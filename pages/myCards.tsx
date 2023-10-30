
import {useState } from 'react'
import type { NextPage } from "next";
import { FC, useEffect } from 'react';
import Image from 'next/image'
import React from 'react';
import { Default } from '../components/layouts/Default';
import { Webtoon } from '../components/templates/webtoon';


const WEBTOON: NextPage =
 () => {
  return (


    <Default pageName="WEBTOON">

    <Webtoon />

  </Default>


    
  );
};

export default WEBTOON;
