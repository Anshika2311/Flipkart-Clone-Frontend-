import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, fade, InputBase, List, ListItem } from '@material-ui/core';

const useStyle=makeStyles((theme)=>({
    search: {
        borderRadius: 2,
        marginLeft: 10,
        width: '38%',
        backgroundColor: '#fff',
        display: 'flex'
      },
      searchIcon: {
        marginLeft: 'auto',
        padding: 5,
        display: 'flex',
        color: 'blue'
      },
      inputRoot: {
        fontSize: 'unset',
        width: '100%'
      },
      inputInput: {
        paddingLeft: 20,
        width: '100%',
    },
}))

const SearchBar=()=>{
    const classes= useStyle();
    return(
        <div className={classes.search}>
            <InputBase
                placeholder="Search for products, brand and more"
                classes={{
                    root:classes.inputRoot,
                    input:classes.inputInput,
                }}
                inputProps={{'aria-label':'Search'}}/>
                <div className={classes.searchIcon}>
            <SearchIcon/>
                </div>
        </div>
    )
}

export default SearchBar;