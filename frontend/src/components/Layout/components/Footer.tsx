import { NAME } from '@utils/constants';
import { FC } from 'react';
import { LuGithub } from 'react-icons/lu';
import { SlSocialLinkedin } from 'react-icons/sl';
import { PiTelegramLogo } from 'react-icons/pi';

export const Footer: FC = () => {
  return (
    <footer className='footer footer-center bg-base-200 text-base-content rounded p-10'>
      <nav className='grid grid-flow-col gap-4'>
        <a className='link link-hover'>Home</a>
        <a className='link link-hover'>Projects</a>
        <a className='link link-hover'>About</a>
      </nav>
      <nav>
        <div className='grid grid-flow-col gap-4'>
          <a>
            <LuGithub size={24} color='fill-current' />
          </a>
          <a>
            <SlSocialLinkedin size={24} color='fill-current' />
          </a>
          <a>
            <PiTelegramLogo size={24} color='fill-current' />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by {NAME}
        </p>
      </aside>
    </footer>
  );
};
