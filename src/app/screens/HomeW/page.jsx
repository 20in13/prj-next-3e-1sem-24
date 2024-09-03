"use client"

import React from 'react';
import { useRouter } from 'next/navigation'; 
import { FaUserCircle } from 'react-icons/fa';
import Card from '../../components/Card/page';
import SearchBar from '../../components/SearchBar';
import styles from './page.module.css';
import NavigationRail from '../../components/NavRail/page';
import { IconButton } from "@mui/material";

export default function HomeW() {

  const router = useRouter();

  const goTo = () => {
    router.push('/screens/Perfil');
  };

  return (
    <div className={styles.scrollView}>
      <NavigationRail />
      <main style={{ flexGrow: 1, paddingLeft: '80px' }}>
        <div className={styles.container}>
          <header className={styles.header}>
            <h1 className={styles.title}>Space School</h1>
            <div className={styles.headerRight}>
              <IconButton onClick={goTo}>
                <FaUserCircle className={styles.profileIcon} />
              </IconButton>
            </div>
          </header>

          <SearchBar />

          <div className={styles.contentWrapper}>
            <div className={styles.content}>
              {Array(25).fill().map((_, index) => (
                <Card key={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

