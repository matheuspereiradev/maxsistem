import styled from 'styled-components'

export const TopBar = styled.div`
.nav {
    height: 46px;
    width: 100%;
    background-color: #6D00AB;
    position: relative;
}

.nav > .nav-header {
    display: none;
}

.nav > .nav-header > .nav-title {
    display: inline-block;
    font-size: 15px;
    color: #fff;
    padding: 10px 10px 10px 10px;
}

.nav > .nav-btn {
    display: none;
}

.nav > .nav-links {
    display: inline;
    float: right;
    font-size: 15px;
}

.nav > .nav-links > a {
    display: inline-block;
    padding: 13px 10px 13px 10px;
    text-decoration: none;
    color: #efefef;
}

.nav > .nav-links > a:hover {
    background-color: rgba(0, 0, 0, 0.3);
}

.nav > #nav-check {
    display: none;
}
`

