<script>
  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'sveltestrap';
  
  let isOpen = false;
  const handleUpdate = (event)=>{ isOpen = event.detail.isOpen }
  export let pages;
  const toMdFile = (item)=>{
        let title = item.replace(/\ /g,'_')
        return `/pages/${title}`
  }
</script>

<Navbar color="light" light expand="md">  
  <NavbarToggler on:click={() => (isOpen = !isOpen)} />
  <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
    <Nav class="mr-auto" navbar>      
      <NavItem>
        <NavLink href="/">Home</NavLink>        
      </NavItem>
      {#each pages as pg}
      <NavItem>        
        <NavLink href="{toMdFile(pg)}">{pg}</NavLink>        
      </NavItem>      
      {/each}
    </Nav>
  </Collapse>
</Navbar>
