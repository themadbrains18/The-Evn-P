import { NavLink } from "react-router-dom";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';


const SideNavItems = [
    {
        "NavItemIcon": <svg width={34} height={34} viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12.75 30.2812H29.2188C29.8064 30.2812 30.2812 29.8064 30.2812 29.2188V11.2891H12.75V30.2812ZM29.2188 3.71875H12.75V9.16406H30.2812V4.78125C30.2812 4.19355 29.8064 3.71875 29.2188 3.71875ZM3.71875 4.78125V29.2188C3.71875 29.8064 4.19355 30.2812 4.78125 30.2812H10.625V3.71875H4.78125C4.19355 3.71875 3.71875 4.19355 3.71875 4.78125Z' /></svg>,
        "NavItemTxt": "Dashboard",
        "NavItemLink": "/",
    },
    {
        "NavItemIcon": <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.3688 26.5924C28.3754 26.5824 28.3854 26.5725 28.392 26.5625C30.5668 23.976 31.875 20.6424 31.875 17C31.875 13.3576 30.5668 10.024 28.3953 7.4375C28.3887 7.42754 28.3787 7.4209 28.3721 7.41094C28.3355 7.36777 28.3023 7.32793 28.2658 7.28809C28.2525 7.27148 28.2393 7.2582 28.226 7.2416L28.0898 7.08555L28.0865 7.08223C28.0367 7.02578 27.9836 6.96934 27.9338 6.91289L27.9305 6.90957C27.8242 6.79668 27.718 6.68379 27.6084 6.57422L27.6051 6.5709L27.4457 6.41152L27.4357 6.40156C27.3859 6.35176 27.3361 6.30527 27.2863 6.25879C27.2697 6.24219 27.2531 6.22559 27.2332 6.20898C27.2 6.17578 27.1668 6.1459 27.1336 6.11602C27.1236 6.10605 27.1104 6.09609 27.1004 6.08281C24.4508 3.62578 20.9014 2.125 17 2.125C13.0986 2.125 9.54922 3.62578 6.89629 6.08281C6.88633 6.09277 6.87305 6.10273 6.86309 6.11602C6.82988 6.1459 6.79668 6.1791 6.76348 6.21231C6.74687 6.22891 6.73027 6.24551 6.71035 6.26211C6.66055 6.30859 6.61074 6.3584 6.56094 6.40488L6.55098 6.41484L6.3916 6.57422L6.38828 6.57754C6.27871 6.68711 6.17246 6.8 6.06621 6.91289L6.06289 6.91621C6.00977 6.97266 5.95996 7.0291 5.91016 7.08555L5.90684 7.08887C5.86035 7.13867 5.81387 7.1918 5.7707 7.24492C5.75742 7.26152 5.74414 7.27481 5.73086 7.29141C5.69434 7.33125 5.66113 7.37441 5.62461 7.41426C5.61797 7.42422 5.60801 7.43086 5.60137 7.44082C3.4332 10.024 2.125 13.3576 2.125 17C2.125 20.6424 3.4332 23.976 5.60469 26.5625C5.61133 26.5725 5.62129 26.5824 5.62793 26.5924L5.73086 26.7152C5.74414 26.7318 5.75742 26.7451 5.7707 26.7617L5.90684 26.9178C5.90684 26.9211 5.91016 26.9211 5.91016 26.9244C5.95996 26.9809 6.00977 27.0373 6.06289 27.0904L6.06621 27.0938C6.17246 27.2066 6.27871 27.3195 6.38496 27.4291L6.38828 27.4324C6.44141 27.4855 6.49121 27.5387 6.54434 27.5885L6.5543 27.5984C6.66387 27.708 6.77676 27.8143 6.88965 27.9172C9.54922 30.3742 13.0986 31.875 17 31.875C20.9014 31.875 24.4508 30.3742 27.1037 27.9172C27.2168 27.8135 27.3275 27.7072 27.4357 27.5984L27.4457 27.5885C27.4988 27.5354 27.552 27.4855 27.6018 27.4324L27.6051 27.4291C27.7146 27.3195 27.8209 27.2066 27.9238 27.0938L27.9271 27.0904C27.977 27.034 28.0301 26.9809 28.0799 26.9244C28.0799 26.9211 28.0832 26.9211 28.0832 26.9178C28.1297 26.868 28.1762 26.8148 28.2193 26.7617C28.2326 26.7451 28.2459 26.7318 28.2592 26.7152C28.2967 26.6752 28.3333 26.6342 28.3688 26.5924ZM28.5049 21.8576C28.0467 22.94 27.4424 23.9428 26.7053 24.8525C25.8751 24.1351 24.9675 23.5126 23.9992 22.9965C24.3844 21.4393 24.6234 19.7293 24.6865 17.9297H29.4512C29.3516 19.2877 29.0328 20.6059 28.5049 21.8576ZM29.4512 16.0703H24.6865C24.6234 14.2707 24.3844 12.5607 23.9992 11.0035C24.9721 10.4855 25.8785 9.86133 26.7053 9.14746C28.3076 11.1196 29.266 13.536 29.4512 16.0703ZM21.8576 5.49512C23.1758 6.05293 24.3744 6.82324 25.4303 7.79277C24.8169 8.31504 24.1567 8.77963 23.458 9.18066C22.9367 7.68652 22.2693 6.38828 21.4924 5.34902C21.6152 5.39551 21.7381 5.44531 21.8576 5.49512ZM18.8494 28.7572C18.5439 28.9963 18.2385 29.1789 17.9297 29.3018V23.1426C19.2472 23.2345 20.5427 23.5279 21.7713 24.0125C21.4957 24.8293 21.177 25.583 20.8084 26.2637C20.2307 27.3395 19.5533 28.1994 18.8494 28.7572ZM20.8084 7.73633C21.1736 8.42031 21.4957 9.17402 21.7713 9.9875C20.5427 10.4721 19.2472 10.7655 17.9297 10.8574V4.70156C18.2352 4.82441 18.5439 5.00371 18.8494 5.24609C19.5533 5.80059 20.2307 6.66055 20.8084 7.73633ZM17.9297 21.2799V17.9297H22.8271C22.774 19.3973 22.5914 20.8217 22.2859 22.173L22.276 22.2129C20.8826 21.6845 19.4172 21.3699 17.9297 21.2799ZM17.9297 16.0703V12.7201C19.4504 12.6271 20.9113 12.3051 22.276 11.7871L22.2859 11.827C22.5914 13.1783 22.774 14.5994 22.8271 16.0703H17.9297ZM16.0703 17.9297V21.2799C14.5496 21.3729 13.0887 21.6949 11.724 22.2129L11.7141 22.173C11.4086 20.8217 11.226 19.4006 11.1729 17.9297H16.0703ZM11.1729 16.0703C11.226 14.6027 11.4086 13.1783 11.7141 11.827L11.724 11.7871C13.0887 12.3051 14.5463 12.6271 16.0703 12.7201V16.0703H11.1729ZM16.0703 23.1426V29.2984C15.7648 29.1756 15.4561 28.9963 15.1506 28.7539C14.4467 28.1994 13.766 27.3361 13.1883 26.2604C12.823 25.5764 12.501 24.8227 12.2254 24.0092C13.4605 23.5244 14.7455 23.2355 16.0703 23.1426ZM16.0703 10.8574C14.7528 10.7655 13.4573 10.4721 12.2287 9.9875C12.5043 9.1707 12.823 8.41699 13.1916 7.73633C13.7693 6.66055 14.4467 5.79727 15.1539 5.24277C15.4594 5.00371 15.7648 4.82109 16.0736 4.69824V10.8574H16.0703ZM12.1424 5.49512C12.2652 5.44531 12.3848 5.39551 12.5076 5.34902C11.7307 6.38828 11.0633 7.68652 10.542 9.18066C9.84473 8.78223 9.18398 8.31738 8.56973 7.79277C9.62559 6.82324 10.8242 6.05293 12.1424 5.49512ZM5.49512 12.1424C5.95332 11.06 6.55762 10.0572 7.29473 9.14746C8.12148 9.86133 9.02793 10.4855 10.0008 11.0035C9.61563 12.5607 9.37656 14.2707 9.31348 16.0703H4.54883C4.64844 14.7123 4.96719 13.3941 5.49512 12.1424ZM4.54883 17.9297H9.31348C9.37656 19.7293 9.61563 21.4393 10.0008 22.9965C9.03251 23.5126 8.12488 24.1351 7.29473 24.8525C5.69244 22.8804 4.73399 20.464 4.54883 17.9297ZM12.1424 28.5049C10.8242 27.9471 9.62559 27.1768 8.56973 26.2072C9.18398 25.6826 9.84473 25.2211 10.542 24.8193C11.0633 26.3135 11.7307 27.6117 12.5076 28.651C12.3848 28.6045 12.2619 28.5547 12.1424 28.5049ZM21.8576 28.5049C21.7348 28.5547 21.6152 28.6045 21.4924 28.651C22.2693 27.6117 22.9367 26.3135 23.458 24.8193C24.1553 25.2178 24.816 25.6826 25.4303 26.2072C24.3803 27.1727 23.1717 27.95 21.8576 28.5049Z" fill="#8794C4" /></svg>,
        "NavItemTxt": "Maps",
        "NavItemLink": "/maps",
    },
    {
        "NavItemIcon": <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.4844 26.2969H6.64062V5.57812C6.64062 5.43203 6.52109 5.3125 6.375 5.3125H4.51562C4.36953 5.3125 4.25 5.43203 4.25 5.57812V28.4219C4.25 28.568 4.36953 28.6875 4.51562 28.6875H29.4844C29.6305 28.6875 29.75 28.568 29.75 28.4219V26.5625C29.75 26.4164 29.6305 26.2969 29.4844 26.2969ZM9.03125 24.1719H26.8281C26.9742 24.1719 27.0938 24.0523 27.0938 23.9062V9.42969C27.0938 9.19062 26.8049 9.07441 26.6389 9.24043L19.6562 16.223L15.4926 12.1059C15.4427 12.0564 15.3752 12.0287 15.305 12.0287C15.2347 12.0287 15.1673 12.0564 15.1174 12.1059L8.84199 18.4012C8.81762 18.4256 8.79832 18.4546 8.78521 18.4865C8.77211 18.5184 8.76545 18.5526 8.76562 18.5871V23.9062C8.76562 24.0523 8.88516 24.1719 9.03125 24.1719Z" fill="#8794C4" /></svg>,
        "NavItemTxt": "Reports",
        "NavItemLink": "/reports",
    },
    {
        "NavItemIcon": <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.7908 21.9473C16.8157 21.979 16.8474 22.0047 16.8837 22.0223C16.9199 22.04 16.9597 22.0492 17 22.0492C17.0403 22.0492 17.0801 22.04 17.1163 22.0223C17.1526 22.0047 17.1843 21.979 17.2092 21.9473L20.9279 17.2424C21.0641 17.0697 20.9412 16.8141 20.7188 16.8141H18.2584V5.57812C18.2584 5.43203 18.1389 5.3125 17.9928 5.3125H16.0006C15.8545 5.3125 15.735 5.43203 15.735 5.57812V16.8107H13.2812C13.0588 16.8107 12.9359 17.0664 13.0721 17.2391L16.7908 21.9473ZM29.1523 20.7852H27.1602C27.0141 20.7852 26.8945 20.9047 26.8945 21.0508V26.1641H7.10547V21.0508C7.10547 20.9047 6.98594 20.7852 6.83984 20.7852H4.84766C4.70156 20.7852 4.58203 20.9047 4.58203 21.0508V27.625C4.58203 28.2127 5.05684 28.6875 5.64453 28.6875H28.3555C28.9432 28.6875 29.418 28.2127 29.418 27.625V21.0508C29.418 20.9047 29.2984 20.7852 29.1523 20.7852Z" fill="#8794C3" /></svg>,
        "NavItemTxt": "Downloads",
        "NavItemLink": "/downloads",
    },
    {
        "NavItemIcon": <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.0159 12.9685C16.0231 12.9685 15.0935 13.3536 14.3896 14.0575C13.689 14.7614 13.3005 15.6911 13.3005 16.6839C13.3005 17.6767 13.689 18.6063 14.3896 19.3103C15.0935 20.0108 16.0231 20.3993 17.0159 20.3993C18.0087 20.3993 18.9384 20.0108 19.6423 19.3103C20.3429 18.6063 20.7313 17.6767 20.7313 16.6839C20.7313 15.6911 20.3429 14.7614 19.6423 14.0575C19.2985 13.7111 18.8893 13.4364 18.4384 13.2494C17.9875 13.0625 17.504 12.967 17.0159 12.9685ZM30.7056 20.7878L28.5341 18.9317C28.637 18.3009 28.6901 17.6567 28.6901 17.0159C28.6901 16.3751 28.637 15.7276 28.5341 15.1001L30.7056 13.244C30.8696 13.1036 30.987 12.9166 31.0422 12.7078C31.0973 12.499 31.0876 12.2784 31.0144 12.0753L30.9845 11.989C30.3869 10.3178 29.4914 8.76878 28.3415 7.41689L28.2817 7.34717C28.1421 7.18298 27.956 7.06496 27.748 7.00865C27.5399 6.95235 27.3197 6.96039 27.1163 7.03174L24.4202 7.99131C23.4241 7.17451 22.3151 6.53037 21.1132 6.08213L20.5919 3.26318C20.5526 3.05082 20.4496 2.85546 20.2965 2.70304C20.1435 2.55062 19.9478 2.44837 19.7353 2.40986L19.6456 2.39326C17.919 2.08115 16.0995 2.08115 14.3729 2.39326L14.2833 2.40986C14.0708 2.44837 13.875 2.55062 13.722 2.70304C13.569 2.85546 13.466 3.05082 13.4267 3.26318L12.9021 6.09541C11.7115 6.54722 10.6024 7.1898 9.61826 7.99795L6.90224 7.03174C6.69893 6.95983 6.47854 6.95149 6.27037 7.00783C6.0622 7.06417 5.87611 7.18253 5.73681 7.34717L5.67705 7.41689C4.52919 8.77022 3.63397 10.3189 3.03408 11.989L3.0042 12.0753C2.85478 12.4903 2.97763 12.9552 3.31299 13.244L5.51103 15.12C5.4081 15.7442 5.3583 16.3817 5.3583 17.0126C5.3583 17.6501 5.4081 18.2876 5.51103 18.9052L3.31963 20.7812C3.15559 20.9216 3.03819 21.1086 2.98303 21.3174C2.92787 21.5262 2.93757 21.7468 3.01084 21.9499L3.04072 22.0362C3.6417 23.7063 4.52822 25.2503 5.68369 26.6083L5.74345 26.678C5.88309 26.8422 6.06919 26.9602 6.27724 27.0165C6.48528 27.0728 6.7055 27.0648 6.90889 26.9935L9.6249 26.0272C10.6144 26.8407 11.7167 27.4849 12.9087 27.9298L13.4333 30.762C13.4726 30.9744 13.5756 31.1697 13.7287 31.3222C13.8817 31.4746 14.0774 31.5768 14.2899 31.6153L14.3796 31.6319C16.1231 31.9457 17.9087 31.9457 19.6522 31.6319L19.7419 31.6153C19.9544 31.5768 20.1502 31.4746 20.3032 31.3222C20.4562 31.1697 20.5592 30.9744 20.5985 30.762L21.1198 27.9431C22.3218 27.4915 23.4308 26.8507 24.4269 26.0339L27.123 26.9935C27.3263 27.0654 27.5467 27.0737 27.7548 27.0174C27.963 26.961 28.1491 26.8427 28.2884 26.678L28.3481 26.6083C29.5036 25.2437 30.3901 23.7063 30.9911 22.0362L31.021 21.9499C31.1638 21.5382 31.0409 21.0767 30.7056 20.7878ZM17.0159 22.521C13.7919 22.521 11.1788 19.9079 11.1788 16.6839C11.1788 13.4599 13.7919 10.8468 17.0159 10.8468C20.2399 10.8468 22.853 13.4599 22.853 16.6839C22.853 19.9079 20.2399 22.521 17.0159 22.521Z" fill="#8794C4" /></svg>,
        "NavItemTxt": "Setting",
        "NavItemLink": "/Setting",
    },
    {
        "NavItemIcon": <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.8983 22.0465H33.0036C33.5537 22.0465 33.9997 21.6006 33.9997 21.0504C33.9997 20.5003 33.5537 20.0544 33.0036 20.0544H25.8983V16.07H28.1398C30.2869 16.07 32.1857 14.7015 32.8646 12.6646L33.9487 9.41249C34.1226 8.8906 33.8406 8.32648 33.3187 8.1525C32.7969 7.97851 32.2327 8.2606 32.0587 8.78249L30.9747 12.0346C30.5673 13.2567 29.428 14.0779 28.1398 14.0779H25.8983V13.0818C25.8983 11.7643 25.0409 10.6441 23.8551 10.2477C23.6089 8.21206 22.4824 6.44413 20.8684 5.33674C21.5042 4.7594 21.914 3.91339 21.914 2.98828V0.996094C21.914 0.445984 21.468 0 20.9179 0C20.3678 0 19.9218 0.445984 19.9218 0.996094V2.98828C19.9218 3.56854 19.4377 4.11719 18.9257 4.11719C18.5034 4.11719 15.3637 4.11719 14.9414 4.11719C14.4294 4.11719 13.9453 3.56854 13.9453 2.98828V0.996094C13.9453 0.445984 13.4993 0 12.9492 0C12.3991 0 11.9531 0.445984 11.9531 0.996094V2.98828C11.9531 3.91345 12.3629 4.75947 12.9987 5.33674C11.3847 6.44413 10.2582 8.21206 10.012 10.2477C8.82619 10.6442 7.96882 11.7645 7.96882 13.0818V14.0779H5.86028C4.572 14.0779 3.4328 13.2568 3.02547 12.0346L1.94139 8.78249C1.76747 8.2606 1.20348 7.97851 0.681394 8.1525C0.159508 8.32648 -0.122519 8.8906 0.0514649 9.41249L1.13548 12.6645C1.81448 14.7015 3.71317 16.07 5.86028 16.07H7.96895V20.0543H0.996359C0.44625 20.0543 0.000265715 20.5003 0.000265715 21.0504C0.000265715 21.6005 0.44625 22.0465 0.996359 22.0465H7.96888V25.0347C7.96888 25.3714 7.98821 25.7036 8.02453 26.0308H5.86028C3.71324 26.0308 1.81442 27.3993 1.13548 29.4362L0.0513985 32.6885C-0.122586 33.2104 0.159441 33.7745 0.681328 33.9485C1.20335 34.1224 1.7674 33.8403 1.94132 33.3185L3.0254 30.0664C3.43274 28.8442 4.57207 28.023 5.86022 28.023H8.4816C9.71503 31.5013 13.0377 33.9995 16.9335 33.9995C20.8293 33.9995 24.152 31.5014 25.3854 28.023H28.1397C29.4279 28.023 30.5672 28.8441 30.9745 30.0664L32.0585 33.3185C32.2326 33.8405 32.7966 34.1224 33.3185 33.9485C33.8404 33.7745 34.1224 33.2104 33.9485 32.6885L32.8646 29.4364C32.1856 27.3994 30.2869 26.0309 28.1398 26.0309H25.8427C25.879 25.7037 25.8983 25.3715 25.8983 25.0348V22.0465V22.0465ZM15.9375 31.9359C12.563 31.4511 9.961 28.5413 9.961 25.0348V13.0818C9.961 12.5326 10.4079 12.0857 10.9571 12.0857H15.9375V31.9359ZM12.0534 10.0936C12.5161 7.82312 14.5284 6.10931 16.9336 6.10931C19.3388 6.10931 21.351 7.82312 21.8138 10.0936H12.0534ZM23.9061 25.0348C23.9061 28.5413 21.3042 31.4511 17.9296 31.9359V12.0858H22.91C23.4593 12.0858 23.9061 12.5327 23.9061 13.0819V25.0348V25.0348Z" fill="#8794C3" /></svg>,
        "NavItemTxt": "Report a Bug",
        "NavItemLink": "/bug-report",
    },
    {
        "NavItemIcon": <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.4943 25.148H27.708C27.5686 25.148 27.4523 25.2643 27.4523 25.4037V27.4557H6.54434V6.54434H27.4557V8.59629C27.4557 8.73574 27.5719 8.85195 27.7113 8.85195H29.4977C29.6371 8.85195 29.7533 8.73906 29.7533 8.59629V5.26934C29.7533 4.70488 29.2984 4.25 28.734 4.25H5.26934C4.70488 4.25 4.25 4.70488 4.25 5.26934V28.7307C4.25 29.2951 4.70488 29.75 5.26934 29.75H28.7307C29.2951 29.75 29.75 29.2951 29.75 28.7307V25.4037C29.75 25.2609 29.6338 25.148 29.4943 25.148ZM29.9492 15.8047H19.5234V13.2812C19.5234 13.0588 19.2645 12.9326 19.0918 13.0721L14.3803 16.7908C14.3485 16.8157 14.3228 16.8474 14.3052 16.8837C14.2875 16.9199 14.2784 16.9597 14.2784 17C14.2784 17.0403 14.2875 17.0801 14.3052 17.1163C14.3228 17.1526 14.3485 17.1843 14.3803 17.2092L19.0918 20.9279C19.2678 21.0674 19.5234 20.9412 19.5234 20.7188V18.1953H29.9492C30.0953 18.1953 30.2148 18.0758 30.2148 17.9297V16.0703C30.2148 15.9242 30.0953 15.8047 29.9492 15.8047Z" fill="#8794C4" /></svg>,
        "NavItemTxt": "Logout",
        "NavItemLink": "/Logout",
    },
];

const SideNavSingleItem = () => {
    return (
        <>
            {SideNavItems.map((elem, index) => {
                return (
                    <ListItem key={index} sx={{ p: 0, mb: { lg: 3, xs: 2 }, padding: "0", '&:last-child': { marginBottom: 0 } }}>
                        <ListItemButton component={NavLink} to={elem.NavItemLink} sx={{
                            padding: { lg: "6px 10px!important", xs: "5px 10px!important" },
                            "&:hover,&.active": {
                                backgroundColor: "#F2F6FE!important",
                                "& svg,path": {
                                    fill: "#0F75BC"
                                },
                                "& span": {
                                    fontWeight: "600",
                                    color: "#0F75BC",
                                },
                            }
                        }}>
                            <ListItemIcon sx={{
                                minWidth: "auto!important",
                                marginRight: { lg: "16px", xs: "12px" },
                                "& svg": {
                                    width: { lg: "initial", xs: "30px" },
                                    height: { lg: "initial", xs: "30px" }
                                },
                                "& svg,path": {
                                    fill: "#8794C3"
                                }
                            }}>
                                {elem.NavItemIcon}
                            </ListItemIcon>
                            <ListItemText primary={elem.NavItemTxt} sx={{
                                m: 0, "& span": {
                                    fontSize: { lg: "14px ", xs: "12px " },
                                    fontWeight: "500",
                                    color: "#8794C4",
                                    lineHeight: "1",
                                }
                            }} />
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </>
    )
}

export default SideNavSingleItem;