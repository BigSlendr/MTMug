/* Interactive Borough Map */
.borough-map{
  width: 100%;
  padding: 22px;
  display:flex;
  justify-content:center;
}

.borough-svg{
  width: min(760px, 100%);
  height: auto;
}

.borough-region{
  cursor:pointer;
  transition: filter 160ms ease, transform 160ms ease;
  outline: none;
}

.borough-region:hover,
.borough-region:focus{
  filter: drop-shadow(0 0 14px rgba(154,107,47,0.45));
  transform: translateY(-1px);
}

.borough-region:active{
  transform: translateY(0);
}
